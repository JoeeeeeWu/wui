<script>
export default {
  name: 'md-tab-bar',
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
    showInkBar: {
      type: Boolean,
      default: true,
    },
    inkBarLength: {
      type: Number,
      default: 70,
      validator(length) {
        return length > 0 && length <= 100;
      },
    },
    inkBarAnimate: {
      type: Boolean,
      default: true,
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
    forceUseArray: {
      type: Boolean,
      default: undefined,
    },
  },
  data() {
    return {
      activeIndex: this.defaultIndex,
    };
  },
  watch: {
    defaultIndex(val) {
      this.selectTab(val);
    },
    activeIndex(val, preVal) {
      this.$emit('indexChanged', val, preVal);
    },
  },
  mounted() {
    this.selectTab(this.activeIndex);
  },
  methods: {
    // MARK: private methods
    $_onSelectTab(index) {
      this.selectTab(index);
    },
    // MARK: public methods
    selectTab(i) {
      const index = parseInt(i, 10);
      if (index >= 0 && index < this.titleList().length) {
        this.activeIndex = index;
      }
    },
    titleList() {
      if (this.titles && this.titles.length) {
        return this.titles;
      } else if (this.$slots.default && this.$slots.default.length) {
        return this.$slots.default.filter(el => el.tag);
      } else { // eslint-disable-line
        return [];
      }
    },
  },
  render(createElement) {
    const self = this;
    let tabTitles = [];
    const mapper = (item, index) => { // eslint-disable-line
      return createElement(
        'div',
        {
          class: {
            'md-tab-title': true,
            active: this.activeIndex === index,
          },
          on: {
            click: () => {
              self.$_onSelectTab(index);
            },
          },
        },
        [
          (this.forceUseArray !== undefined ? this.forceUseArray : !!this.$scopedSlots.title) ? this.$scopedSlots.title(item) : item, // eslint-disable-line
        ],
      );
    };
    tabTitles = this.titleList().map(mapper);
    const innerElements = [...tabTitles];
    if (this.showInkBar) {
      const padPercent = (100 - this.inkBarLength) / 2;
      const width = this.inkBarLength / tabTitles.length;
      const pad = padPercent / tabTitles.length;
      const offset = ((this.activeIndex * 100) / tabTitles.length) + pad;
      innerElements.push(createElement(
        'div',
        {
          class: {
            'ink-bar': true,
            'animate': this.inkBarAnimate, // eslint-disable-line
          },
          style: {
            width: `${width}%`,
            left: `${offset}%`,
          },
        },
      ));
    }
    return createElement(
      'div',
      {
        class: {
          'md-tab-bar': true,
        },
      },
      [createElement(
        'div',
        {
          class: {
            'md-tab-titles-wrpper': true,
          },
        },
        innerElements,
      )],
    );
  },
};
</script>
