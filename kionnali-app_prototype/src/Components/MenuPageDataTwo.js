const initialData = {
	subpages: {
		"subpage-1": { page: "Organiser", link: "/organiser", id: "1" },
		"subpage-2": { page: "Shopping List", link: "/shopping-list", id: "2" },
		"subpage-3": { page: "Cleaning", link: "/cleaning", id: "3" },
		"subpage-4": { page: "Marketplace", link: "/marketplace", id: "4" },
		"subpage-5": { page: "Roamstead Chat", link: "/roamstead-chat", id: "5" },
		"subpage-6": { page: "Community Feed", link: "/community-feed", id: "6" },
		"subpage-7": { page: "Forum", link: "/forum", id: "7" },
		"subpage-8": { page: "Compare All", link: "/compare-systems", id: "8" },
		"subpage-9": { page: "Food", link: "/food-system", id: "9" },
		"subpage-10": { page: "Water", link: "/water-system", id: "10" },
		"subpage-11": { page: "Power", link: "/power-system", id: "11" },
		"subpage-12": { page: "Thermal", link: "/thermal-system", id: "12" },
		"subpage-13": { page: "Compost", link: "/compost-system", id: "13" },
		"subpage-14": { page: "EV", link: "/ev-system", id: "14" },
		"subpage-15": { page: "Weather", link: "/weather", id: "15" },
		"subpage-16": { page: "Preparedness", link: "/preparedness", id: "16" },
	},

	columns: {
		"column-1": {
			id: "column-1",
			title: "Clean & Tidy",
			subpageIds: ["subpage-1", "subpage-2", "subpage-3"],
		},
		"column-2": {
			id: "column-2",
			title: "Connect",
			subpageIds: ["subpage-4", "subpage-5", "subpage-6", "subpage-7"],
		},
		"column-3": {
			id: "column-3",
			title: "Systems",
			subpageIds: [
				"subpage-8",
				"subpage-9",
				"subpage-10",
				"subpage-11",
				"subpage-12",
				"subpage-13",
				"subpage-14",
			],
		},
		"column-4": {
			id: "column-4",
			title: "Weather",
			subpageIds: ["subpage-15"],
		},
		"column-5": {
			id: "column-5",
			title: "Preparedness",
			subpageIds: ["subpage-16"],
		},
	},
};
