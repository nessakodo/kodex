import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const ARTICLES_PER_PAGE = 4;

const articles = [
  {
    id: "2858728",
    title: "Database Security Patterns for Web Applications",
    description: "Databases are the crown jewels of any system. One injection flaw, and attackers can walk away with...",
    publishedDate: "Sep 21",
    readingTime: 1,
    tags: ["database", "security", "sql", "backend"],
    coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2ueuvjc723isdq5ym0n5.png",
    devToUrl: "https://dev.to/vanessamadison/database-security-patterns-for-web-applications-3gdn",
    slug: "database-security-patterns-for-web-applications",
  },
  {
    id: "2858726",
    title: "AWS Security Best Practices for Production Applications",
    description: "AWS can scale your business overnight — or expose it if misconfigured. From IAM sprawl to open S3...",
    publishedDate: "Sep 21",
    readingTime: 2,
    tags: ["aws", "cloud", "security", "devops"],
    coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F628zbm731466pqjwl1gd.png",
    devToUrl: "https://dev.to/vanessamadison/aws-security-best-practices-for-production-applications-25e9",
    slug: "aws-security-best-practices-for-production-applications",
  },
  {
    id: "2858723",
    title: "Implementing Zero-Trust Architecture in Node.js Applications",
    description: "Zero-Trust is often summarized in five words: never trust, always verify. In Node.js, this philosophy...",
    publishedDate: "Sep 21",
    readingTime: 2,
    tags: ["node", "security", "backend"],
    coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flmgqsokxhis44xuiecbz.png",
    devToUrl: "https://dev.to/vanessamadison/implementing-zero-trust-architecture-in-nodejs-applications-5be9",
    slug: "implementing-zero-trust-architecture-in-nodejs-applications",
  },
  {
    id: "2858718",
    title: "React Security Patterns Every Developer Should Know",
    description: "Building secure React applications requires more than just following best practices—it demands...",
    publishedDate: "Sep 21",
    readingTime: 2,
    tags: ["react", "security", "webdev", "javascript"],
    coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fplohgc116hn6bntvpxk0.png",
    devToUrl: "https://dev.to/vanessamadison/react-security-patterns-every-developer-should-know-8ep",
    slug: "react-security-patterns-every-developer-should-know",
  },
];

const Insights = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(startIndex, endIndex);

  return (
    <div className="pt-16 pb-24">
      <Container>
        <header className="mb-16 max-w-2xl text-center mx-auto animate-fade-in">
          <p className="text-overline mb-4">INSIGHTS</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-lead">
            Deep-dives into security architecture, implementation patterns, and
            lessons learned from production systems.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {currentArticles.map((article) => (
            <article
              key={article.id}
              className="group border border-border rounded-lg overflow-hidden bg-card hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all"
            >
              {article.coverImage && (
                <div className="aspect-video overflow-hidden bg-neutral-100">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-xs font-medium uppercase tracking-wider text-accent bg-accent-subtle px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="h3 mb-3 group-hover:text-accent transition-colors-smooth">
                  {article.title}
                </h2>

                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {article.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3 text-xs text-neutral-500">
                    <span>{article.publishedDate}</span>
                    <span>·</span>
                    <span>{article.readingTime} min read</span>
                  </div>

                  <a
                    href={article.devToUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors-smooth"
                  >
                    View on DEV
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-950 border border-border rounded hover:border-cyan-400/50 hover:bg-card transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded text-sm font-medium transition-all ${
                    currentPage === page
                      ? "bg-accent text-white"
                      : "text-neutral-950 border border-border hover:border-cyan-400/50 hover:bg-card"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-950 border border-border rounded hover:border-cyan-400/50 hover:bg-card transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:bg-transparent"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="https://dev.to/vanessamadison"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors-smooth"
          >
            View all articles on DEV.to
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Insights;
