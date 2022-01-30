export default {
  async getAll() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      data: [
        {
          title: "Гроза",
          slug: "groza",
          subtitle: "12 марта",
        },
        {
          title: "Stand-Up Dvizh",
          slug: "stand-up-dvizh",
          subtitle: "12 марта",
        },
        {
          title: "МЫКОСМОС",
          slug: "mykosmos",
          subtitle: "19 марта (событие) <br /> 25 марта-10 апреля (выставка)",
        },
        {
          title: "New Matters",
          slug: "new-matters",
          subtitle: "8-24 апреля",
        },
        {
          title: "Cinema Love",
          slug: "cinema-love",
          subtitle: "15-17 апреля, 22-24 апреля",
        },
      ],
    };
  },
};
