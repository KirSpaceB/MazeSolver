import { NavBar } from "./NavBar.js";
import { Grid } from "./Grid.js";
import { MazeDivWrapper } from "./MazeDivWrapper.js";
import { ActivateAlgo } from "./ActivateAlgo.js";
import { Slider } from "./Slider.js";
import { AddWallUI } from "./AddWallUI.js";
import { GravityButtonLogic } from "./GravityButtonLogic.js";
import { InsertionSortLogic } from "./InsertionSortLogic.js";
import { SelectionSort } from "./SelectionSortLogic.js";
import { BubbleSort } from "./BubbleSortLogic.js";
import { MergeSort } from "./MergeSortLogic.js";
import { QuickSort } from "./QuickSortLogic.js";
import { RadixSort } from "./RadixSortLogic.js";
import { StartGoalLogic } from "./StartGoalLogic.js";
import { AddWallLogic } from "./AddWallLogic.js";
import { DFS } from "./DFS.js";
import { BFS } from "./BFS.js";
import { Dijkstras } from "./Dijkstras.js";
import { AStar } from "./Astar.js";
export class MainSingleton {
  constructor() {
    if (!MainSingleton.instance) {
      MainSingleton.instance = this;
      this.NavBar = new NavBar();
      this.MazeDivWrapper = new MazeDivWrapper();
      this.Slider = new Slider();
      this.Grid = new Grid();
      this.AddWallUI = new AddWallUI();
    }
    return MainSingleton.instance;
  }
}
const Main = new MainSingleton();