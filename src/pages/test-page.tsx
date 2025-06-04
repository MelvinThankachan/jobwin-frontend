import FilterGroupCollapsible from "@/components/shared/filter-group-collapsible";

const filters = [
  {
    title: "Type of employment",
    filters: ["Full time", "Part time", "Internship", "Remote"],
  },
  {
    title: "Categories",
    filters: [
      "Design",
      "Development",
      "Sales",
      "Marketing",
      "Management",
      "UX",
      "Product",
    ],
  },
  {
    title: "Location",
    filters: [
      "New York",
      "San Francisco monaco beach road apartments house hotel hospital",
      "Remote",
    ],
  },
  {
    title: "Experience level",
    filters: ["Entry level", "Mid level", "Senior level"],
  },
  {
    title: "Salary range",
    filters: ["$10k - $20k", "$20k - $30k", "$30k - $40k", "$40k - $50k"],
  },
];

const TestPage = () => {
  return (
    <div className="section-container">
      <div className="flex w-full">
        <div className="bg-red-300 w-sm px-5">
          {filters.map((filter) => (
            <FilterGroupCollapsible
              key={filter.title}
              title={filter.title}
              filters={filter.filters}
            />
          ))}
        </div>
        <div className="bg-green-300 flex-1">jobs</div>
      </div>
    </div>
  );
};

export default TestPage;
