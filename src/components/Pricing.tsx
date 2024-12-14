import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Free Credits',
    id: 'tier-free',
    href: '/auth/signin',
    price: '$0',
    description: 'Try out our AI tools.',
    features: [
      '$1 worth of credits',
      'Basic image models ($0.003/image)',
      'Basic video models ($0.45/video)',
      'Standard quality',
      'Community support',
    ],
    featured: false,
  },
  {
    name: '$5 Credits',
    id: 'tier-basic',
    href: '/auth/signin',
    price: '$5',
    description: 'Perfect for casual creators.',
    features: [
      '$6 worth of credits (20% bonus)',
      'All image models (up to $0.06/image)',
      'All video models (up to $0.50/video)',
      'Priority processing',
      'Higher quality output',
      'Email support',
    ],
    featured: false,
  },
  {
    name: '$10 Credits',
    id: 'tier-pro',
    href: '/auth/signin',
    price: '$10',
    description: 'Best value for active creators.',
    features: [
      '$13 worth of credits (30% bonus)',
      'All image models (up to $0.06/image)',
      'All video models (up to $0.50/video)',
      'Highest priority processing',
      'Maximum quality output',
      'Priority support',
      'Advanced settings access',
    ],
    featured: true,
  },
];

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Flexible Credit System
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Start with free credits. Choose from various AI models: images ($0.003-$0.06) or videos ($0.45-$0.50).
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 ${
                tier.featured
                  ? 'bg-gray-400/10 ring-gray-400/20'
                  : 'bg-gray-400/5 ring-gray-400/10'
              }`}
            >
              <h3 className="text-lg font-semibold leading-8 text-white">
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
              </p>
              <a
                href={tier.href}
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-400'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                }`}
              >
                Get started
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
