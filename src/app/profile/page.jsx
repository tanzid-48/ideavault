import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getMyIdeas, getMyComments } from "@/lib/data";
import { FiEdit2, FiMail, FiCalendar, FiArrowUpRight, FiBookmark, FiMessageSquare } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;


  if (!user) {
    return (
      <div className="w-full min-h-screen bg-gray-50 dark:bg-zinc-950 flex items-center justify-center px-4">
        <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-3xl p-10 flex flex-col items-center gap-4 max-w-sm w-full text-center shadow-sm">
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40">
            <HiOutlineLightBulb className="h-8 w-8 text-indigo-500" />
          </div>
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">You are not logged in</h2>
          <p className="text-sm text-gray-400 dark:text-zinc-500">Please login to view your profile, ideas, and interactions.</p>
          <Link href="/login"
            className="mt-2 w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-bold hover:opacity-90 transition-opacity text-center">
            Login to Continue
          </Link>
        </div>
      </div>
    );
  }

  const ideas = await getMyIdeas(user.id);
  const recentIdeas = ideas.slice(0, 3);

  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : "May 2026";

  const stats = [
    { label: "Ideas",        value: ideas.length, href: "/myIdeas"        },
    { label: "Interactions", value: 12,            href: "/myInteractions" },
    { label: "Saved",        value: 5,             href: "/savedIdeas"     },
  ];

  const quickLinks = [
    { href: "/myIdeas",        icon: HiOutlineLightBulb, label: "My Ideas",     color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950/40"  },
    { href: "/myInteractions", icon: FiMessageSquare,    label: "Interactions", color: "text-sky-500",    bg: "bg-sky-50 dark:bg-sky-950/40"         },
    { href: "/savedIdeas",     icon: FiBookmark,          label: "Saved",        color: "text-amber-500",  bg: "bg-amber-50 dark:bg-amber-950/40"    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-zinc-950 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-md flex flex-col gap-4">

        {/* ── Profile Card ── */}
        <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm">

          {/* Banner */}
          <div className="relative h-32 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 overflow-hidden">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/20 rounded-full blur-sm" />
            <div className="absolute top-2 left-32 w-14 h-14 bg-white/15 rounded-full blur-sm" />
            <div className="absolute -top-2 right-10 w-20 h-20 bg-white/20 rounded-full blur-sm" />
            <div className="absolute top-10 right-4 w-10 h-10 bg-white/15 rounded-full blur-sm" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-3">
              <Link href="/myIdeas"
                className="inline-flex items-center gap-1.5 text-white/90 text-xs font-semibold hover:text-white transition-colors">
                <HiOutlineLightBulb className="h-4 w-4" /> Ideas
              </Link>
              <Link href="/editProfile"
                className="inline-flex items-center gap-1.5 text-white/90 text-xs font-semibold hover:text-white transition-colors">
                <FiEdit2 className="h-3.5 w-3.5" /> Edit Profile
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center -mt-12 px-6 pb-6">
            {/* Avatar */}
            <div className="relative mb-3">
              <div className="w-24 h-24 rounded-full border-4 border-white dark:border-zinc-900 overflow-hidden bg-indigo-100 dark:bg-zinc-800 shadow-lg">
                {user?.image ? (
                  <Image src={user.image} alt={user?.name || "User"} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-black text-indigo-600 dark:text-indigo-400">
                    {user?.name?.[0]?.toUpperCase() || "U"}
                  </div>
                )}
              </div>
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white dark:border-zinc-900 rounded-full" />
            </div>

            <h1 className="text-xl font-extrabold text-gray-900 dark:text-white text-center">
              {user?.name || "Anonymous"}
            </h1>
            <div className="flex flex-col items-center gap-1 mt-1.5">
              <span className="text-sm text-gray-400 dark:text-zinc-500 flex items-center gap-1.5">
                <FiMail className="h-3.5 w-3.5" /> {user?.email}
              </span>
              <span className="text-xs text-gray-400 dark:text-zinc-500 flex items-center gap-1.5">
                <FiCalendar className="h-3 w-3" /> Joined {joinedDate}
              </span>
            </div>

            {/* Stats — image 2 এর মতো */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-5 border-t border-gray-100 dark:border-zinc-800 w-full">
              {stats.map((s) => (
                <Link key={s.label} href={s.href}
                  className="flex flex-col items-center gap-0.5 hover:opacity-75 transition-opacity">
                  <span className="text-2xl font-black text-gray-900 dark:text-white">{s.value}</span>
                  <span className="text-[11px] text-gray-400 dark:text-zinc-500 font-medium">{s.label}</span>
                </Link>
              ))}
            </div>

            <Link href="/myIdeas"
              className="mt-6 w-full flex items-center justify-center py-2.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-bold hover:opacity-90 transition-opacity">
              Show more
            </Link>
          </div>
        </div>

        {/* ── Quick Links — image 1 এর মতো 4 card ── */}
        <div className="grid grid-cols-4 gap-3">
          {[
            ...quickLinks,
            { href: "/savedIdeas", icon: FiBookmark, label: "Bookmark", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/40" },
          ].map(({ href, icon: Icon, label, color, bg }) => (
            <Link key={label} href={href}
              className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-2.5 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
              <div className={`p-2.5 rounded-xl ${bg}`}>
                <Icon className={`h-4 w-4 ${color}`} />
              </div>
              <span className="text-[11px] font-semibold text-gray-700 dark:text-zinc-300 text-center leading-tight">{label}</span>
            </Link>
          ))}
        </div>

        {/* ── Recent Ideas ── */}
        <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-3xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <HiOutlineLightBulb className="h-4 w-4 text-indigo-500" /> Recent Ideas
            </h2>
            <Link href="/myIdeas"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline">
              View all <FiArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          {recentIdeas.length === 0 ? (
            <div className="flex flex-col items-center py-8 gap-2">
              <HiOutlineLightBulb className="h-8 w-8 text-gray-200 dark:text-zinc-700" />
              <p className="text-sm text-gray-400 dark:text-zinc-500">No ideas yet</p>
              <Link href="/addIdea"
                className="mt-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
                + Add your first idea
              </Link>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-gray-50 dark:divide-zinc-800">
              {recentIdeas.map((idea) => (
                <Link href={`/ideas/${idea._id}`} key={idea._id}
                  className="group flex items-center gap-3 py-3 hover:opacity-75 transition-opacity">
                  <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-zinc-800">
                    {idea.image && <Image src={idea.image} alt={idea.title} fill  className="w-full h-full object-cover" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{idea.title}</p>
                    <p className="text-xs text-gray-400 dark:text-zinc-500 truncate">{idea.category}</p>
                  </div>
                  <FiArrowUpRight className="h-3.5 w-3.5 text-gray-300 dark:text-zinc-600 group-hover:text-indigo-500 transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;