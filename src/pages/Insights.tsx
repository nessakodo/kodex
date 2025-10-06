import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";

const articles = [
  {
    slug: "zero-trust-nodejs",
    title: "Implementing Zero-Trust Architecture in Node.js Applications",
    category: "NODE.JS",
    date: "2025-10-01",
    readTime: "8 min",
    excerpt:
      "Practical patterns for JWT scoping, service mesh integration, and mTLS implementation in production Node.js systems.",
  },
  {
    slug: "database-security",
    title: "Database Security Patterns for Production Systems",
    category: "DATABASE",
    date: "2025-09-15",
    readTime: "6 min",
    excerpt:
      "Essential security controls for database systems including parameterized queries, least-privilege access, and audit logging.",
  },
  {
    slug: "aws-security-baseline",
    title: "AWS Security Baseline for Regulated Industries",
    category: "AWS",
    date: "2025-09-01",
    readTime: "9 min",
    excerpt:
      "Comprehensive guide to AWS security best practices for organizations in healthcare, finance, and other regulated sectors.",
  },
];

const Insights = () => {
  return (
    <div className="py-24">
      <Container>
        <header className="mb-16 max-w-2xl">
          <p className="text-overline mb-2">INSIGHTS</p>
          <h1 className="h1 mb-6">Technical Articles</h1>
          <p className="text-lead">
            Deep-dives into security architecture, implementation patterns, and
            lessons learned from production systems.
          </p>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-4 px-4 text-sm font-semibold text-neutral-950">
                  Title
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-neutral-950 hidden md:table-cell">
                  Category
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-neutral-950 hidden md:table-cell">
                  Date
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-neutral-950 hidden lg:table-cell">
                  Read Time
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr
                  key={article.slug}
                  className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors-smooth"
                >
                  <td className="py-4 px-4">
                    <Link
                      to={`/insights/${article.slug}`}
                      className="text-neutral-950 hover:text-accent font-medium transition-colors-smooth"
                    >
                      {article.title}
                    </Link>
                    <p className="text-sm text-neutral-600 mt-1 md:hidden">
                      {article.excerpt}
                    </p>
                  </td>
                  <td className="py-4 px-4 hidden md:table-cell">
                    <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent bg-accent-subtle px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-neutral-600 hidden md:table-cell">
                    {article.date}
                  </td>
                  <td className="py-4 px-4 text-sm text-neutral-600 hidden lg:table-cell">
                    {article.readTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card view */}
        <div className="md:hidden space-y-4 mt-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/insights/${article.slug}`}
              className="block border border-neutral-200 rounded-lg p-6 hover:border-neutral-300 hover:shadow-sm transition-smooth"
            >
              <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent bg-accent-subtle px-2 py-1 rounded mb-3">
                {article.category}
              </span>
              <h3 className="h3 mb-2">{article.title}</h3>
              <p className="text-sm text-neutral-600 mb-4">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-neutral-600">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Insights;
