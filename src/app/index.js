import Head from 'next/head';
import Link from 'next/link';
import BlockchainCertificate from '../components/BlockchainCertificate';

export default function Dashboard() {
  const sections = [
    { name: 'Aptitude Reasoning', href: '/aptitude' },
    { name: 'Examination', href: '/examination' },
    { name: 'Coding Modules', href: '/coding' },
    { name: 'AI Research', href: '/ai-research' },
    { name: 'AI Security', href: '/ai-security' },
    { name: 'Blockchain Certificates', href: '/blockchain-certificates' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Job-City Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Job-City</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link key={section.name} href={section.href}>
              <div className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{section.name}</h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>Explore {section.name.toLowerCase()} modules and resources.</p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <span className="font-medium text-indigo-600 hover:text-indigo-500">
                      Get started <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <BlockchainCertificate />
        </div>
      </main>
    </div>
  );
}
