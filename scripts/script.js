const jobs = [
        {
          id: "J-1001",
          companyName: "ShopSwift",
          position: "Frontend Developer (Junior)",
          location: "Merul Badda, Dhaka",
          type: "Full-time",
          salary: "$35,000–$55,000",
          description:
            "Build responsive UI for an e-commerce dashboard. Work with REST APIs and fix real production UI bugs.",
          status: null,
        },
        {
          id: "J-1002",
          companyName: "CloudCraft",
          position: "JavaScript Developer",
          location: "Remote (GMT+6 friendly)",
          type: "Contract",
          salary: "$200–$500/month",
          description:
            "Create reusable components and improve page performance. Strong DOM and event handling required.",
          status: null,
        },
        {
          id: "J-1003",
          companyName: "FinNest",
          position: "UI Engineer",
          location: "Nasirabaad, Chattogram",
          type: "Full-time",
          salary: "$45,000–$70,000",
          description:
            "Work closely with design team to convert Figma screens into accessible UI with consistent spacing and typography.",
          status: null,
        },
        {
          id: "J-1004",
          companyName: "MedixCare",
          position: "Frontend Intern",
          location: "Sylhet",
          type: "Internship",
          salary: "$15,000–$20,000",
          description:
            "Assist in building clinic appointment pages, validate forms, and support responsive layouts for mobile users.",
          status: null,
        },
        {
          id: "J-1005",
          companyName: "EduPilot",
          position: "Web Developer",
          location: "Remote",
          type: "Part-time",
          salary: "$10–$14/hour",
          description:
            "Maintain an online learning portal. Implement tabs, filters, and dynamic rendering using vanilla JavaScript.",
          status: null,
        },
        {
          id: "J-1006",
          companyName: "TravelNova",
          position: "Frontend Developer",
          location: "Banani, Dhaka",
          type: "Full-time",
          salary: "$50,000–$80,000",
          description:
            "Build itinerary UI, integrate maps, and improve UX for booking flows. Focus on clean UI and fast rendering.",
          status: null,
        },
        {
          id: "J-1007",
          companyName: "SecurePay",
          position: "Junior UI Developer",
          location: "Gulshan, Dhaka",
          type: "Full-time",
          salary: "$40,000–$60,000",
          description:
            "Work on payment pages with strong attention to validation, error states, and responsive behavior.",
          status: null,
        },
        {
          id: "J-1008",
          companyName: "GreenGrid",
          position: "Frontend Developer",
          location: "Uposhohor, Rajshahi",
          type: "Full-time",
          salary: "$38,000–$58,000",
          description:
            "Develop energy usage dashboards with cards and charts. Prioritize clean layout and user-friendly details.",
          status: null,
        },
      ];

      // ------ UI State ------
      let activeTab = "all";

      // ------ Elements ------
      const jobsGrid = document.getElementById("jobsGrid");
      const emptyState = document.getElementById("emptyState");
      const emptyTitle = document.getElementById("emptyTitle");
      const emptySubtitle = document.getElementById("emptySubtitle");

      const tabCountEl = document.getElementById("tabCount");

      const countAllDash = document.getElementById("countAllDash");
      const countInterviewDash = document.getElementById("countInterviewDash");
      const countRejectedDash = document.getElementById("countRejectedDash");

      const getFilteredJobs = () => {
        if (activeTab === "interview") return jobs.filter((j) => j.status === "Interview");
        if (activeTab === "rejected") return jobs.filter((j) => j.status === "Rejected");
        return jobs; // all
      };

      const getCounts = () => {
        const interview = jobs.filter((j) => j.status === "Interview").length;
        const rejected = jobs.filter((j) => j.status === "Rejected").length;
        const all = jobs.length;
        return { all, interview, rejected };
      };

      const escapeHtml = (str) =>
        String(str)
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#039;");

      const statusBadge = (status) => {
        if (status === "Interview") {
          return `<span class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>Interview
          </span>`;
        }
        if (status === "Rejected") {
          return `<span class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700">
            <span class="h-1.5 w-1.5 rounded-full bg-rose-600"></span>Rejected
          </span>`;
        }
        return `<span class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
          <span class="h-1.5 w-1.5 rounded-full bg-slate-500"></span>Pending
        </span>`;
      };

      const renderEmpty = () => {
        const subtitleByTab = {
          interview: "Check back soon for new job opportunities.",
          rejected: "Click “Rejected” on a job card to move it here.",
          all: "Add jobs or refresh your dataset to see cards here.",
        };

        const titleByTab = {
          interview: "No jobs available in Interview",
          rejected: "No jobs available in Rejected",
          all: "No jobs available",
        };

        emptyTitle.textContent = titleByTab[activeTab] || "No jobs available";
        emptySubtitle.textContent =
          subtitleByTab[activeTab] || "Try switching tabs to see jobs.";

        emptyState.classList.remove("hidden");
        jobsGrid.classList.add("hidden");
      };
      const renderJobs = () => {
        // Dashboard counts
        const { all, interview, rejected } = getCounts();
        countAllDash.textContent = all;
        countInterviewDash.textContent = interview;
        countRejectedDash.textContent = rejected;

        // Tab count (right side of section)
        const filtered = getFilteredJobs();
        tabCountEl.textContent = filtered.length;

        if (filtered.length === 0) {
          renderEmpty();
          return;
        }

        emptyState.classList.add("hidden");
        jobsGrid.classList.remove("hidden");

        jobsGrid.innerHTML = filtered
          .map((job) => {
            const isInterview = job.status === "Interview";
            const isRejected = job.status === "Rejected";

            return `
              <article class="rounded-2xl border bg-white p-5 shadow-sm flex flex-col">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-sm font-semibold truncate">${escapeHtml(job.companyName)}</p>
                    <p class="text-sm text-slate-600 mt-1">${escapeHtml(job.position)}</p>
                  </div>
                  <div class="flex items-center gap-2">
                    ${statusBadge(job.status)}
                    <button
                      class="delete-btn h-9 w-9 rounded-xl border hover:bg-slate-50 grid place-items-center"
                      title="Delete"
                      data-id="${job.id}"
                      aria-label="Delete job">
                      <img src="Vector.png" alt="Delete" class="w-4 h-4 object-contain opacity-80 hover:opacity-100" />
                    </button>
                  </div>
                </div>

                <div class="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div class="rounded-xl bg-slate-50 p-3">
                    <p class="text-xs text-slate-500">Location</p>
                    <p class="font-medium mt-1">${escapeHtml(job.location)}</p>
                  </div>
                  <div class="rounded-xl bg-slate-50 p-3">
                    <p class="text-xs text-slate-500">Type</p>
                    <p class="font-medium mt-1">${escapeHtml(job.type)}</p>
                  </div>
                  <div class="rounded-xl bg-slate-50 p-3 col-span-2">
                    <p class="text-xs text-slate-500">Salary</p>
                    <p class="font-medium mt-1">${escapeHtml(job.salary)}</p>
                  </div>
                </div>

                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  ${escapeHtml(job.description)}
                </p>

                <div class="mt-5 flex gap-2">
                  <button
                    class="status-btn flex-1 px-4 py-2 rounded-xl text-sm font-medium border transition
                      ${isInterview ? "bg-emerald-600 text-white border-emerald-600" : "bg-white hover:bg-slate-50"}"
                    data-action="interview"
                    data-id="${job.id}"
                  >
                    Interview
                  </button>

                  <button
                    class="status-btn flex-1 px-4 py-2 rounded-xl text-sm font-medium border transition
                      ${isRejected ? "bg-rose-600 text-white border-rose-600" : "bg-white hover:bg-slate-50"}"
                    data-action="rejected"
                    data-id="${job.id}"
                  >
                    Rejected
                  </button>
                </div>
              </article>
            `;
          })
          .join("");
      };

      const setActiveTab = (tab) => {
        activeTab = tab;

        // Update tab button styles
        document.querySelectorAll(".tab-btn").forEach((btn) => {
          const isActive = btn.dataset.tab === tab;
          btn.className =
            "tab-btn px-4 py-2 rounded-xl text-sm font-medium border " +
            (isActive
              ? "bg-slate-900 text-white"
              : "bg-white hover:bg-slate-50");
        });

        renderJobs();
      };

      // ======= Events =======
      document.getElementById("tabs").addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-tab]");
        if (!btn) return;
        setActiveTab(btn.dataset.tab);
      });

      // Event delegation for card buttons
      document.addEventListener("click", (e) => {
        const statusBtn = e.target.closest("button.status-btn");
        const deleteBtn = e.target.closest("button.delete-btn");

        // Toggle Interview/Rejected
        if (statusBtn) {
          const id = statusBtn.dataset.id;
          const action = statusBtn.dataset.action; // interview | rejected
          const job = jobs.find((j) => j.id === id);
          if (!job) return;

          if (action === "interview") job.status = "Interview";
          if (action === "rejected") job.status = "Rejected";

          renderJobs();
          return;
        }

        // Delete
        if (deleteBtn) {
          const id = deleteBtn.dataset.id;
          const idx = jobs.findIndex((j) => j.id === id);
          if (idx === -1) return;
          jobs.splice(idx, 1);
          renderJobs();
        }
      });

      // ======= Init =======
      document.getElementById("todayText").textContent = new Date().toLocaleDateString(
        undefined,
        { year: "numeric", month: "short", day: "numeric" }
      );

      renderJobs();