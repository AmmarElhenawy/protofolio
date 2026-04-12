import AppShell from "@/components/layout/AppShell";
import bg from "../../../components/ABG_REGISTER2.jpg";
const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-shaded" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
    </svg>
    ,
    title: "Secure API Layer",
    desc: "Laravel Sanctum for secure token-based authentication, ensuring protected access to all mobile-ready endpoints.",
    tags: ["Sanctum", "Token Auth"],
    span: "md:col-span-2",
    filled: true,
    color: "text-[#7dc8ff]",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-columns-gap" viewBox="0 0 16 16">
      <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
    </svg>,
    title: "Modular Controllers",
    desc: "Specialized controllers for Friends, Posts, Comments, and Search ensuring high maintainability.",
    tags: [],
    span: "",
    filled: false,
    color: "text-[#feca5d]",
    border: "border-l-2 border-[#feca5d]",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-database" viewBox="0 0 16 16">
      <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525" />
    </svg>,
    title: "Data Integrity",
    desc: "Relational schema using Laravel Migrations and Seeders for consistent environment setup.",
    tags: [],
    span: "",
    filled: false,
    color: "text-[#a9ffdf]",
    border: "border-r-2 border-[#a9ffdf]",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
      <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
    </svg>,
    title: "Containerization Ready",
    desc: "Configured with Laravel Sail (Docker) providing a standardized PHP and MySQL dev environment.",
    tags: [],
    span: "",
    filled: false,
    color: "text-[#ff8d8d]",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-charge" viewBox="0 0 16 16">
      <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
    </svg>,
    title: "Real-time Ready",
    desc: "Database and events structure designed for easy Laravel Echo WebSocket integration.",
    tags: [],
    span: "md:col-span-2",
    filled: false,
    color: "text-[#feca5d]",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z" />
      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
    </svg>,
    title: "Media Uploads",
    desc: "File storage integration for media-rich posts with scalable cloud delivery.",
    tags: [],
    span: "",
    filled: false,
    color: "text-slate-300",
  },
];

export default function AbgPage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full flex-1">
        {/* Hero Header */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#7dc8ff]/20 text-[#7dc8ff] text-[10px] font-bold tracking-widest uppercase border border-[#7dc8ff]/20">
                  Laravel API
                </span>
                <span className="text-slate-600 font-label text-xs tracking-tighter">
                  PROJECT_ID: ABG-0001
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black tracking-tighter text-on-surface mb-4">
                ABG{" "}
                <span className="text-[#7dc8ff]">Social App</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-body">
                A robust social networking engine built with Laravel providing a
                full-cycle user experience — secure auth, real-time interactions,
                and media-rich posts.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://documenter.getpostman.com/view/42406499/2sBXc8qPbR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7dc8ff] text-[#001a2c] px-6 py-3 font-label font-bold text-xs tracking-widest uppercase flex items-center gap-2 rounded-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(125,200,255,0.2)]"
              >
                <span className="material-symbols-outlined text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg></span>
                Postman Demo
              </a>
              <a
                href="https://github.com/AmmarElhenawy/abg-social-app/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-container-high border border-outline-variant/30 text-on-surface px-6 py-3 font-label font-bold text-xs tracking-widest uppercase flex items-center gap-2 rounded-lg hover:bg-surface-bright transition-all"
              >
                <span className="material-symbols-outlined text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code" viewBox="0 0 16 16">
                  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
                </svg></span>                
                GitHub
              </a>
            </div>
          </div>

          {/* Hero banner */}
          <div className="relative h-64 w-full overflow-hidden bg-surface-container-low flex items-end">
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />
            {/* Animated grid overlay */}


            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${bg.src})`,
              }}
            />

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 flex flex-wrap gap-6 sm:gap-12">
              {[
                { label: "Framework", value: "Laravel 11", color: "text-[#7dc8ff]" },
                { label: "Database", value: "MySQL", color: "text-[#feca5d]" },
                { label: "Real-time", value: "Pusher ", color: "text-[#a9ffdf]" },
              ].map(({ label, value, color }) => (
                <div key={label}>
                  <p className={`text-[10px] font-label ${color} uppercase tracking-widest mb-1`}>
                    {label}
                  </p>
                  <p className="text-xl font-headline font-bold text-on-surface tracking-tight">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem / Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#7dc8ff]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#7dc8ff]/5 rounded-full blur-3xl" />
            <h3 className="text-xs font-label text-[#7dc8ff] uppercase tracking-[0.3em] mb-6">
              01 // PROBLEM
            </h3>
            <p className="text-slate-300 font-body leading-relaxed mb-6">
              Traditional niche communities often lack a centralized, private
              space for seamless interaction, media sharing, and real-time
              networking.
            </p>
            <div className="p-4 bg-surface-container-high border-l-2 border-[#7dc8ff]/40">
              <p className="text-xs font-label text-slate-500 uppercase mb-2">
                Solution
              </p>
              <p className="text-sm font-body italic text-on-surface-variant">
                &quot;A robust social networking engine that provides a full-cycle
                user experience — from secure authentication and profile
                customization to friend requests, media-rich posts, and instant
                notifications.&quot;
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 sm:p-8 relative overflow-hidden border-t-2 border-[#00edba]">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#a9ffdf]/5 rounded-full blur-3xl" />
            <h3 className="text-xs font-label text-[#a9ffdf] uppercase tracking-[0.3em] mb-6">
              02 // FEATURES
            </h3>
            <p className="text-slate-300 font-body leading-relaxed mb-6">
              Authentication (JWT + Sanctum) · Role-based access · CRUD
              operations · Validation · Error handling · File uploads · ChatGateway · MailerModule . real-time pusher 
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Real-time Notifications", "Media-rich Posts"].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a9ffdf] text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16">
                      <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                    </svg>
                  </span>
                  <span className="text-[10px] font-label text-slate-400 uppercase">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-low p-6 sm:p-10 relative overflow-hidden border-t-2 border-[#ff9bd2] md:col-span-2">

            {/* Glow effect */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#ff9bd2]/10 rounded-full blur-3xl" />

            <h3 className="text-xs font-label text-[#ff9bd2] uppercase tracking-[0.3em] mb-6">
              03 // TASK
            </h3>

            <p className="text-slate-300 font-body leading-relaxed mb-8 max-w-2xl">
              This task was assigned by <span className="text-white font-semibold">ABG Company </span>
              with a strict deadline of <span className="text-white font-semibold">2 days</span>.
              The requirement was to build a structured backend system following both
              <span className="text-[#7dc8ff]"> API architecture</span> and
              <span className="text-[#a9ffdf]"> MVC pattern</span>, ensuring clean code, scalability, and proper separation of concerns.
            </p>

            {/* Button */}
            <a
              href="https://drive.google.com/file/d/1wOqOo_Q8ibc3-YxJ7LvmFzoUt0kAG3MZ/view?usp=drive_link"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-label uppercase tracking-widest border border-[#ff9bd2]/40 text-[#ff9bd2] hover:bg-[#ff9bd2]/10 transition"
            >
              View Task Requirement
              <span>→</span>
            </a>

          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="mb-24">
          <h3 className="text-xs font-label text-slate-500 uppercase tracking-[0.3em] mb-8 text-center">
            Engineering & Technical Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className={`${f.span} bg-surface-container-high p-6 group hover:bg-[#1d2023] transition-all ${f.border || ""}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`material-symbols-outlined ${f.color}`}
                    style={f.filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    {f.icon}
                  </span>
                  <h4 className="font-headline font-bold text-lg tracking-tight">
                    {f.title}
                  </h4>
                </div>
                <p className="text-sm text-slate-400 mb-4">{f.desc}</p>
                {f.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-surface-container-low px-3 py-1 rounded text-[10px] font-label text-slate-400 border border-outline-variant/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h3 className="text-xs font-label text-[#7dc8ff] uppercase tracking-[0.3em] mb-4">
              Architecture Design
            </h3>
            <h4 className="text-4xl font-headline font-bold text-on-surface mb-6 tracking-tighter">
              MVC · RESTful API
            </h4>
            <p className="text-slate-400 font-body leading-relaxed mb-8">
              Model-View-Controller with RESTful Resource Controllers for
              consistent JSON responses and standard HTTP status codes.
            </p>
            <ul className="space-y-4">
              {[
                { n: "01", c: "text-[#7dc8ff]", title: "FriendsController", desc: "Friend request flows and friendship management." },
                { n: "02", c: "text-[#feca5d]", title: "PostsController", desc: "Media-rich posts with file upload support." },
                { n: "03", c: "text-[#a9ffdf]", title: "CommentsController", desc: "Threaded discussion and engagement logic." },
                { n: "04", c: "text-[#ff8d8d]", title: "ProfileController", desc: "Profile management and user data handling." },
              ].map(({ n, c, title, desc }) => (
                <li key={n} className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 ${c} text-xs font-bold font-headline`}>
                    {n}
                  </div>
                  <div>
                    <p className="text-sm font-headline font-bold text-on-surface uppercase tracking-tight">
                      {title}
                    </p>
                    <p className="text-xs text-slate-500">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Code schematic */}
          <div className="lg:col-span-7 bg-surface-container-low p-4 sm:p-8 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[10px] font-label text-slate-600 uppercase tracking-widest">
                routes/api.php // resource_map
              </span>
            </div>
            <div className="space-y-4 font-mono text-[11px]">
              <div className="flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#7dc8ff]">
                <span className="text-[#7dc8ff]">Route::resource</span>
                <span className="text-slate-600">-&gt; ('posts', PostController)</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#feca5d]">
                <span className="text-[#feca5d]">Route::resource</span>
                <span className="text-slate-600">-&gt; ('friends', FriendsController)</span>
              </div>
              <div className="ml-16 flex items-center gap-4 p-3 bg-surface-container-high border-l-2 border-[#a9ffdf]">
                <span className="text-[#a9ffdf]">Route::resource</span>
                <span className="text-slate-600">-&gt; ('profiles', ProfileController)</span>
              </div>
              <div className="ml-8 flex items-center gap-4 p-3 bg-[#0c0e10]/40">
                <span className="text-slate-400">Sanctum::middleware</span>
                <span className="text-slate-600">-&gt; auth:sanctum</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-surface-container-high/30">
                <span className="text-[#ff8d8d]">WebSocket</span>
                <span className="text-slate-600">-&gt; Pusher / Laravel Echo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom links */}
        <section className="bg-surface-container-low p-6 sm:p-12 text-center border border-outline-variant/5 mb-12">
          <h3 className="text-2xl font-headline font-bold mb-8 tracking-tighter">
            Explore Technical Documentation
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg>, label: "API Demo", value: "Postman", color: "text-[#7dc8ff]", href: "https://documenter.getpostman.com/view/42406499/2sBXc8qPbR"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0" />
                </svg>, label: "Source Code", value: "GitHub", color: "text-[#feca5d]", href: "https://github.com/AmmarElhenawy/abg-social-app/tree/main"
              },
            ].map(({ icon, label, value, color, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-surface-container-high hover:bg-surface-bright transition-all w-48 rounded-lg group"
              >
                <span className={`material-symbols-outlined ${color} text-3xl mb-3 group-hover:scale-110 transition-transform`}>
                  {icon}
                </span>
                <span className="text-[10px] font-label text-slate-400 uppercase tracking-widest mb-1">
                  {label}
                </span>
                <span className="text-sm font-headline font-bold text-on-surface">
                  {value}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}