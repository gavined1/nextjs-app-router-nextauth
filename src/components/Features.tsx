import { PhotoIcon, ArrowPathIcon, SparklesIcon, PaintBrushIcon, VideoCameraIcon, VideoCameraSlashIcon, FilmIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Text to Image Generation',
    description: 'Transform your text descriptions into stunning, realistic images using advanced AI models.',
    icon: SparklesIcon,
  },
  {
    name: 'Image Enhancement',
    description: 'Automatically improve image quality, remove noise, and enhance details with AI-powered tools.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Style Transfer',
    description: 'Apply artistic styles to your photos and create unique visual transformations.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Photo Editing',
    description: 'Professional-grade AI tools for retouching, background removal, and image manipulation.',
    icon: PhotoIcon,
  },
  {
    name: 'Text to Video',
    description: 'State-of-the-art text-to-video generation model capable of creating high-quality videos with realistic motion from text descriptions',
    icon: VideoCameraIcon,
  },
  {
    name: 'Image to video',
    description: 'Animate still images into video with advanced AI models.',
    icon: FilmIcon,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">AI-Powered Creation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Advanced Image Generation & Enhancement
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Unleash your creativity with our comprehensive suite of AI image tools. From generating new images to enhancing existing ones, we have got everything you need.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
