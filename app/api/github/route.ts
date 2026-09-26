import { NextResponse } from "next/server";

const GITHUB_USERNAME = "avadhutgiri12";

export async function GET() {
  try {
    const query = `
      query($username: String!) {
        user(login: $username) {
          repositories(
            first: 100
            ownerAffiliations: OWNER
            privacy: PUBLIC
          ) {
            totalCount
            nodes {
              stargazerCount
              forkCount
            }
          }

          contributionsCollection {
            totalCommitContributions
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          username: GITHUB_USERNAME,
        },
      }),
      next: {
        revalidate: 3600,
      },
    });

    const result = await response.json();

    if (!response.ok || result.errors) {
      console.error("GitHub GraphQL error:", result.errors);

      return NextResponse.json(
        {
          error: "Failed to fetch GitHub data",
        },
        { status: 500 }
      );
    }

    const user = result.data.user;

    if (!user) {
      return NextResponse.json(
        {
          error: "GitHub user not found",
        },
        { status: 404 }
      );
    }

    let stars = 0;
    let forks = 0;

    for (const repo of user.repositories.nodes) {
      stars += repo.stargazerCount;
      forks += repo.forkCount;
    }

    return NextResponse.json({
      repositories: user.repositories.totalCount,

      commits:
        user.contributionsCollection.totalCommitContributions,

      totalContributions:
        user.contributionsCollection.contributionCalendar
          .totalContributions,

      stars,
      forks,

      weeks:
        user.contributionsCollection.contributionCalendar.weeks,
    });
  } catch (error) {
    console.error("GitHub API error:", error);

    return NextResponse.json(
      {
        error: "GitHub API request failed",
      },
      { status: 500 }
    );
  }
}