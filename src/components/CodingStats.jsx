import React, { useState, useEffect } from 'react';
import { Code, GitFork, Star, Users, Trophy, Target, TrendingUp, Zap, Github, Award, Activity, CheckCircle2 } from 'lucide-react';

const CodingStats = () => {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'amitmamgai2k';
  const LEETCODE_USERNAME = 'amitmamgai2k';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch GitHub data
        const githubResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!githubResponse.ok) throw new Error('Failed to fetch GitHub data');
        const githubUserData = await githubResponse.json();

        // Fetch GitHub repos to calculate stars and languages
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
        const reposData = await reposResponse.json();

        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((sum, repo) => sum + repo.forks_count, 0);

        // Get unique languages
        const languages = [...new Set(reposData.map(repo => repo.language).filter(Boolean))];

        setGithubData({
          ...githubUserData,
          totalStars,
          totalForks,
          languages: languages.slice(0, 5)
        });

        // Fetch LeetCode data using public API
        const leetcodeResponse = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`);
        if (leetcodeResponse.ok) {
          const leetcodeStats = await leetcodeResponse.json();
          setLeetcodeData(leetcodeStats);
        } else {
          // Fallback if API fails - try alternative API
          const altLeetcodeResponse = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USERNAME}`);
          if (altLeetcodeResponse.ok) {
            const altLeetcodeStats = await altLeetcodeResponse.json();
            setLeetcodeData({
              totalSolved: altLeetcodeStats.totalSolved || 0,
              easySolved: altLeetcodeStats.easySolved || 0,
              mediumSolved: altLeetcodeStats.mediumSolved || 0,
              hardSolved: altLeetcodeStats.hardSolved || 0,
              ranking: altLeetcodeStats.ranking || 'N/A',
              acceptanceRate: altLeetcodeStats.acceptanceRate || 0,
            });
          }
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const StatCard = ({ icon: Icon, title, value, subtitle, gradient, delay = 0 }) => (
    <div
      className="group relative p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:border-gray-600 hover:bg-gray-800/70 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10`}></div>

      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
          <Icon size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
          <p className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {value}
          </p>
          {subtitle && <p className="text-gray-500 text-xs mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );

  const LoadingSkeleton = () => (
    <div className="animate-pulse space-y-4">
      <div className="h-32 bg-gray-800/50 rounded-2xl"></div>
      <div className="h-32 bg-gray-800/50 rounded-2xl"></div>
    </div>
  );

  const ProgressBar = ({ label, value, max, color }) => {
    const percentage = max ? (value / max) * 100 : 0;
    return (
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">{label}</span>
          <span className="text-white font-medium">{value}</span>
        </div>
        <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="coding-stats" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <Activity size={16} className="text-green-400" />
            <span className="text-green-400 text-sm font-medium">Live Stats</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Coding <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Journey</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-400"></div>
            <Code size={24} className="text-green-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-400"></div>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real-time statistics from my GitHub and LeetCode profiles
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LoadingSkeleton />
            <LoadingSkeleton />
          </div>
        ) : error ? (
          <div className="text-center text-red-400 py-12">
            <p>Error loading stats: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* GitHub Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 shadow-lg">
                  <Github size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">GitHub</h3>
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-green-400 transition-colors"
                  >
                    @{GITHUB_USERNAME}
                  </a>
                </div>
              </div>

              {githubData && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <StatCard
                      icon={Code}
                      title="Repositories"
                      value={githubData.public_repos}
                      gradient="from-blue-500 to-cyan-500"
                      delay={100}
                    />
                    <StatCard
                      icon={Star}
                      title="Total Stars"
                      value={githubData.totalStars}
                      gradient="from-yellow-500 to-orange-500"
                      delay={200}
                    />
                    <StatCard
                      icon={Users}
                      title="Followers"
                      value={githubData.followers}
                      gradient="from-purple-500 to-pink-500"
                      delay={300}
                    />
                    <StatCard
                      icon={GitFork}
                      title="Total Forks"
                      value={githubData.totalForks}
                      gradient="from-green-500 to-emerald-500"
                      delay={400}
                    />
                  </div>

                  {/* Languages */}
                  {githubData.languages && githubData.languages.length > 0 && (
                    <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Zap size={18} className="text-yellow-400" />
                        Top Languages
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {githubData.languages.map((lang, index) => (
                          <span
                            key={lang}
                            className="px-3 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-300 border border-gray-600/50 hover:border-green-500/50 transition-colors"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* GitHub Contribution Graph Image */}
                  <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm overflow-hidden">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Activity size={18} className="text-green-400" />
                      Contribution Graph
                    </h4>
                    <img
                      src={`https://ghchart.rshah.org/22c55e/${GITHUB_USERNAME}`}
                      alt="GitHub Contribution Graph"
                      className="w-full rounded-lg"
                    />
                  </div>
                </>
              )}
            </div>

            {/* LeetCode Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg">
                  <Trophy size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">LeetCode</h3>
                  <a
                    href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-yellow-400 transition-colors"
                  >
                    @{LEETCODE_USERNAME}
                  </a>
                </div>
              </div>

              {leetcodeData && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <StatCard
                      icon={CheckCircle2}
                      title="Problems Solved"
                      value={leetcodeData.totalSolved || 'N/A'}
                      gradient="from-green-500 to-emerald-500"
                      delay={100}
                    />
                    <StatCard
                      icon={Award}
                      title="Ranking"
                      value={leetcodeData.ranking ? `#${leetcodeData.ranking.toLocaleString()}` : 'N/A'}
                      gradient="from-yellow-500 to-orange-500"
                      delay={200}
                    />
                    <StatCard
                      icon={Target}
                      title="Acceptance Rate"
                      value={leetcodeData.acceptanceRate ? `${Math.round(leetcodeData.acceptanceRate)}%` : 'N/A'}
                      gradient="from-blue-500 to-cyan-500"
                      delay={300}
                    />
                    <StatCard
                      icon={TrendingUp}
                      title="Contribution"
                      value={leetcodeData.contributionPoints || leetcodeData.totalSolved || 'N/A'}
                      subtitle="Points"
                      gradient="from-purple-500 to-pink-500"
                      delay={400}
                    />
                  </div>

                  {/* Total Problems Card */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm font-medium">Total Problems in LeetCode</p>
                        <p className="text-4xl font-bold text-white mt-2">
                          {(leetcodeData.totalEasy || 0) + (leetcodeData.totalMedium || 0) + (leetcodeData.totalHard || 0) || '3200+'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm font-medium">Your Progress</p>
                        <p className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mt-2">
                          {leetcodeData.totalSolved || 0}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 h-3 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-1000"
                        style={{
                          width: `${Math.min(((leetcodeData.totalSolved || 0) / 3200) * 100, 100)}%`
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* LeetCode Activity Card - Similar to GitHub Graph */}
                  <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm overflow-hidden">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Activity size={18} className="text-orange-400" />
                      LeetCode Activity
                    </h4>
                    <div className="space-y-4">
                      {/* LeetCode Stats Card */}
                      <img
                        src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Nunito&ext=heatmap`}
                        alt="LeetCode Stats"
                        className="w-full rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      {/* Fallback if image fails */}
                      <div className="hidden p-4 bg-gray-700/50 rounded-lg text-center">
                        <p className="text-gray-400 text-sm">
                          LeetCode activity heatmap unavailable.
                          <a
                            href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:underline ml-1"
                          >
                            View on LeetCode →
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white font-medium transition-all duration-300 hover:bg-gray-700/50 hover:border-gray-600 hover:-translate-y-1"
            >
              <Github size={20} />
              View GitHub Profile
            </a>
            <a
              href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:-translate-y-1"
            >
              <Trophy size={20} />
              View LeetCode Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
