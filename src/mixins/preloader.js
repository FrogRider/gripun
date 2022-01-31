import { mapMutations, mapGetters } from "vuex";

export default {
  methods: {
    ...mapMutations({
      hidePreloader: "preloader/hidePreloader",
      showPreloader: "preloader/showPreloader"
    }),
  },
  computed: {
    ...mapGetters({
      preloader: "preloader/preloader"
    })
  }
};
