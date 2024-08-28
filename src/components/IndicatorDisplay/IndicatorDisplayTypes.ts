import React from "react";
import { Bill } from "../../store/billsSlice/billsSliceTypes";

export interface IndicatorDisplayProps {
     label: string;
     amount: Bill["amount"];
     isPercentage?: boolean;
     children?: React.ReactNode;
}
