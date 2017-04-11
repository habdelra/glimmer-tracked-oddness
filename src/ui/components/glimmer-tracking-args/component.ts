import Component, { tracked } from "@glimmer/component";

export default class GlimmerTrackingArgs extends Component {

  @tracked
  model: any = {
    foo: "bar",
    bleep: "blurp"
  };

  @tracked ("model")
  get stringifiedModel() {
    return JSON.stringify(this.model);
  }

  didInsertElement() {
    setTimeout(() => {
      this.model = {
        ...this.model,
        foo: "bloop"
      };
    }, 1000);
  }
}
