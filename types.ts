
export interface LoanDetails {
  principal: number;
  termMonths: number;
  interestRate: number;
}

export interface CalculationResult {
  monthlyPayment: number;
  totalRepayment: number;
  totalInterest: number;
  aiTip?: string;
}
