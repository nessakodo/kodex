import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { ExternalLink, ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";

const ARTICLES_PER_PAGE = 3;

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  cover_image: string | null;
  url: string;
  slug: string;
}

const Insights = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dev.to/api/articles?username=vanessamadison&per_page=100');

        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }

        const data: DevToArticle[] = await response.json();
        setArticles(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load articles');
        console.error('Error fetching dev.to articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Get featured article (most recent)
  const featuredArticle = articles[0];
  // Get remaining articles for pagination
  const remainingArticles = articles.slice(1);

  const totalPages = Math.ceil(remainingArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = remainingArticles.slice(startIndex, endIndex);

  // Reset to page 1 when articles change
  useEffect(() => {
    setCurrentPage(1);
  }, [articles.length]);

  return (
    <div className="pt-16 pb-24">
      <Container>
        <header className="mb-12 max-w-3xl text-center mx-auto animate-fade-in">
          <p className="text-overline mb-4">INSIGHTS</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-lead">
            Deep-dives into security architecture, implementation patterns, and
            lessons learned from production systems.
          </p>
        </header>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyan-400 border-r-transparent"></div>
            <p className="mt-4 text-neutral-600">Loading articles...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="text-sm text-accent hover:text-accent-hover transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && featuredArticle && (
          <>
            {/* Featured Article Hero */}
            <article className="mb-16 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              <a
                href={featuredArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-card to-neutral-50/50 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-periwinkle/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

                {/* Animated border gradient on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" style={{
                  background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 25%, rgba(154, 140, 255, 0.4) 50%, rgba(199, 196, 255, 0.3) 100%)',
                  padding: '1px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }} />
                {/* Featured Badge */}
                <div className="absolute top-6 left-6 z-30">
                  <span className="inline-block text-xs font-medium uppercase tracking-wider text-neutral-600 border border-neutral-200 px-3 py-1 rounded-full bg-card backdrop-blur-sm">
                    LATEST POST
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  {featuredArticle.cover_image && (
                    <div className="relative h-64 md:h-80 lg:h-auto overflow-hidden">
                      <img
                        src={featuredArticle.cover_image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/40 lg:to-transparent" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredArticle.tag_list.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block text-xs font-medium uppercase tracking-wider text-neutral-600 border border-neutral-200 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 md:mb-4 leading-tight tracking-tight text-neutral-950 group-hover:text-accent transition-colors">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-sm md:text-base lg:text-lg text-neutral-600 leading-relaxed mb-4 md:mb-6">
                      {featuredArticle.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredArticle.published_at)}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.reading_time_minutes} min read</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                      Read Full Article
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </a>
            </article>

            {/* More Articles Section */}
            {currentArticles.length > 0 && (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-neutral-950">More Articles</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                  {currentArticles.map((article, index) => (
                    <a
                      key={article.id}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative border border-neutral-200 rounded-xl overflow-hidden bg-card/80 backdrop-blur-sm hover:border-transparent hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 block opacity-0 animate-fade-in"
                      style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                    >
                      {/* Gradient background overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-periwinkle/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

                      {/* Animated border gradient on hover */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" style={{
                        background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 25%, rgba(154, 140, 255, 0.4) 50%, rgba(199, 196, 255, 0.3) 100%)',
                        padding: '1px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude'
                      }} />

                      {article.cover_image && (
                        <div className="relative aspect-video overflow-hidden bg-neutral-100 z-0">
                          <img
                            src={article.cover_image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40" />
                        </div>
                      )}

                      <div className="relative p-6 z-20">
                        <div className="flex items-center gap-2 mb-3">
                          {article.tag_list.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="inline-block text-xs font-medium uppercase tracking-wider text-neutral-600 border border-neutral-200 px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-lg font-bold mb-3 text-neutral-950 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-2">
                          {article.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div className="flex items-center gap-2 text-xs text-neutral-500">
                            <span>{formatDate(article.published_at)}</span>
                            <span>•</span>
                            <span>{article.reading_time_minutes} min</span>
                          </div>

                          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:text-accent-hover transition-colors">
                            Read
                            <ExternalLink className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-neutral-950 border border-neutral-200 bg-card/80 backdrop-blur-sm rounded-lg hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-neutral-200 disabled:hover:shadow-none"
                    >
                      {/* Gradient background overlay */}
                      <span className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-periwinkle/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />

                      {/* Animated border gradient on hover */}
                      <span
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 25%, rgba(154, 140, 255, 0.4) 50%, rgba(199, 196, 255, 0.3) 100%)',
                          padding: '1px',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      />

                      <span className="relative z-10 flex items-center gap-2">
                        <ChevronLeft className="w-4 h-4" />
                        Previous
                      </span>
                    </button>

                    <div className="flex items-center gap-2 overflow-x-auto max-w-full px-4 sm:px-0">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`group relative w-11 h-11 flex-shrink-0 rounded-lg text-sm font-semibold transition-all duration-300 overflow-hidden ${
                            currentPage === page
                              ? "border border-neutral-200 bg-gradient-to-br from-sky-blue/10 to-aqua-mint/10 text-neutral-950"
                              : "border border-neutral-200 bg-card/80 backdrop-blur-sm text-neutral-950 hover:border-transparent hover:shadow-2xl"
                          }`}
                        >
                          {currentPage !== page && (
                            <>
                              {/* Gradient background overlay */}
                              <span className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-periwinkle/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />

                              {/* Animated border gradient on hover */}
                              <span
                                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                  background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 25%, rgba(154, 140, 255, 0.4) 50%, rgba(199, 196, 255, 0.3) 100%)',
                                  padding: '1px',
                                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                  WebkitMaskComposite: 'xor',
                                  maskComposite: 'exclude',
                                }}
                              />
                            </>
                          )}
                          <span className="relative z-10">{page}</span>
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-neutral-950 border border-neutral-200 bg-card/80 backdrop-blur-sm rounded-lg hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-neutral-200 disabled:hover:shadow-none"
                    >
                      {/* Gradient background overlay */}
                      <span className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-periwinkle/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />

                      {/* Animated border gradient on hover */}
                      <span
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 25%, rgba(154, 140, 255, 0.4) 50%, rgba(199, 196, 255, 0.3) 100%)',
                          padding: '1px',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      />

                      <span className="relative z-10 flex items-center gap-2">
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                )}
              </>
            )}

            <div className="mt-16 text-center">
              <a
                href="https://dev.to/vanessamadison"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                View all articles on DEV.to
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Insights;
