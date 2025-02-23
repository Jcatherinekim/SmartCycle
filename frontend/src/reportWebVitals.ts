// reportWebVitals.ts
import { ReportHandler } from 'web-vitals';

// This is the default export of the file, and it accepts a function to log results
const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getLCP }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getLCP(onPerfEntry);
    });
  }
};

export default reportWebVitals;
