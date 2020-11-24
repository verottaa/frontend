export class Plan {
  id: string;
  steps: Step[];
  period: number;
}

export class Step {
  id: string;
  title: string;
  @JSON.parse('education_form')
  educationForm: string;
  period: number;
  materials: string;
}
