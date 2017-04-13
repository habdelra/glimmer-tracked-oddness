import Component, { tracked } from "@glimmer/component";

export default class GlimmerTrackingArgs extends Component {
  @tracked
  foo: boolean = false;

  didInsertElement() {
    this.foo = true;
  }
}
