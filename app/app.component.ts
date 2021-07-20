import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;
  unsubcribe: any

  public fields: any[] = [
    {
      type: 'text',
      name: 'Form name',
      label: 'Client Transmittal Form: Date Submitted',
      value: '',
      required: true
    },
    
    {
      type: 'text',
      name: 'Account Name',
      label: 'Account Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'Full Client Name',
      label: 'Full Client Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },

    {
      type: 'text',
      name: 'Account Number',
      label: 'Account Number',
      value: '',
      required: true,
      
    },
    {
      type: 'dropdown',
      name: 'Type',
      label: 'Issue Type',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'Operational' },
        { key: 'us', label: 'Performance' },
        { key: 'us', label: 'Fraud' },
        { key: 'us', label: 'Service' }
      ]
    },
    
    {
      type: 'checkbox',
      name: 'Requirements',
      label: 'Requirements (please attach)',
      required: true,
      options: [
        { key: 'A', label: 'Acknowledgement response sent _________________' },
        { key: 'C', label: 'Close response sent_____________________' }
      ]
    },

    {
      type: 'text',
      name: 'Summary',
      label: 'Issue Summary',
      value: '',
      required: true,
    },
    {
      type: 'radio',
      name: 'Resolved',
      label: 'Resolved',
      value: 'in',
      required: true,
      options: [
        { key: 'Y', label: 'Yes' },
        { key: 'N', label: 'No' }
      ]
    },
  ];

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  onUpload(e) {
    console.log(e);

  }

  getFields() {
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
}
