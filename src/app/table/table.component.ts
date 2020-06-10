import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { TemplateDirective } from './template.directive';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: any[];

  @ContentChildren(TemplateDirective) templates: QueryList<any>;

  template: TemplateDirective;

  constructor() { }

  ngOnInit() {
    // console.log(this.data);
  }

  ngAfterContentInit() {
    this.template = this.templates.first.template;
    // console.log(this.template);
  }
}