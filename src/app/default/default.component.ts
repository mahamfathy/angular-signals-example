import { NgFor } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  standalone: true,
  imports: [NgFor],
})
export class DefaultComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  increment() {
    // this.counter.update((oldValue) => oldValue + 1);
    // this.counter.set(5);
    this.counter.set(this.counter() + 1);

    // this.actions.push("INCREMENT");
    this.actions.update((oldActions) => [...oldActions, "INCREMENT"]);
  }

  decrement() {
    this.counter.update((oldValue) => oldValue - 1);
    // this.actions.push("DECREMENT");
    this.actions.update((oldActions) => [...oldActions, "DECREMENT"]);
  }
}
