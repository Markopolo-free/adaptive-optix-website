import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const useCasePageData = [
  {
    slug: 'mobility-as-a-service',
    href: '/use-cases/mobility-as-a-service',
    title: 'Mobility as a Service',
    description_2: 'Enable flexible pricing and incentive management for mobility service providers.',
    body: [
      {
        _type: 'block',
        _key: 'maas-1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Mobility as a Service (MaaS) shifts access from ownership to flexible, on-demand transport bundles tailored to user needs.'
          }
        ],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'maas-2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Consolidating price and incentive offerings from multiple service providers through a single solution helps operators differentiate and drive engagement.'
          }
        ],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'maas-3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Use dynamic pricing, loyalty programs, and promotions to improve adoption and lifetime value.'
          }
        ],
        markDefs: []
      }
    ]
  },
  {
    slug: 'leisure-activity-pricing',
    href: '/use-cases/leisure-activity-pricing',
    title: 'Leisure Activity Pricing',
    description_2: 'Optimize leisure and entertainment pricing with flexible, time-based, and value-based models.',
    body: [
      {
        _type: 'block',
        _key: 'lap-1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Leisure and entertainment providers benefit from dynamic pricing that balances capacity, demand, and experience quality.'
          }
        ],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'lap-2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Time-based and stored-value pricing can be combined with rewards and partner offers to increase engagement.'
          }
        ],
        markDefs: []
      },
      {
        _type: 'block',
        _key: 'lap-3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Segmented pricing and targeted incentives help drive repeat usage and improve margins.'
          }
        ],
        markDefs: []
      }
    ]
  }
];

export async function POST() {
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  const token = process.env.SANITY_API_TOKEN;

  if (!projectId || !dataset) {
    return NextResponse.json(
      { error: 'Missing SANITY_PROJECT_ID or SANITY_DATASET in environment' },
      { status: 400 }
    );
  }

  if (!token) {
    return NextResponse.json(
      { error: 'Missing SANITY_API_TOKEN (create a token with write access and add it to .env.local)' },
      { status: 400 }
    );
  }

  try {
    const client = createClient({
      projectId,
      dataset,
      token,
      useCdn: false,
      apiVersion: '2024-06-01'
    });

    const tx = client.transaction();

    for (const pageData of useCasePageData) {
      tx.createOrReplace({
        _type: 'useCasePage',
        _id: `useCasePage-${pageData.slug}`,
        slug: pageData.slug,
        href: pageData.href,
        title: pageData.title,
        description_2: pageData.description_2,
        body: pageData.body
      } as any);
    }

    await tx.commit({ visibility: 'async' });

    return NextResponse.json({
      ok: true,
      message: 'Use case pages seeded successfully',
      count: useCasePageData.length
    });
  } catch (error: any) {
    console.error('Error seeding use case pages:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to seed use case pages' },
      { status: 500 }
    );
  }
}
