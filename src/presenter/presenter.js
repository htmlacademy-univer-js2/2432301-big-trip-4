import TripListView from '../view/trip-list-view.js';
import CurrentFormView from '../view/current-form-view.js';
import SortingView from '../view/sorting-view.js';
import TripPointView from '../view/trip-point-view.js';
import { render } from '../render.js';

export default class Presenter {
  sortFormView = new SortingView();
  tripListView = new TripListView();

  constructor ({container, pointModel}) {
    this.container = container;
    this.pointModel = pointModel;
  }

  init() {
    this.points = [...this.pointModel.getPoints()];
    this.currentPoint = this.pointModel.getPoint();

    render(this.sortFormView, this.container);
    render(this.tripListView, this.container);

    render(new CurrentFormView({point: this.currentPoint}), this.tripListView.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new TripPointView({data: this.points[i]}), this.tripListView.getElement());
    }
  }
}

