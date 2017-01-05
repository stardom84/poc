import RetirementCalculatorService from '../../services/retirement-calculator.service';
import ChartService from '../../services/chart.service';

export default class AnalysisChartController implements ng.IController {
  public static $inject: Array<string> = ['RetirementCalculator', 'ChartService'];

  // bindings
  public client: any;

  public chart: Chart.IChart;

  constructor(
    private RetirementCalculator: RetirementCalculatorService,
    private Chart: ChartService
  ) {}

  $onInit() {
    this.chart = {
      target: 'analysis-chart',
      width: 800,
      height: 500,
      svg: null,
      points: {
        line: {
          neededBudget: [[], []],
          expectedBudget: [[], []],
          existingSaving: [[], []]
        },
        legend: {
          x: [],
          y: []
        }
      },
      data: {
        xAxis: [],
        yAxis: []
      }
    };
  }

  $postLink() {
    this.Chart.draw(this.chart);
  }

  $onChanges(value: any) {

  }

  $doCheck() {
    this.Chart.redraw(this.chart);
  }
}
