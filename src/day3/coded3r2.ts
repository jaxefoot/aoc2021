import { dataD3 } from "./data";

const oxygenComparator = (count, length) => count >= length / 2;
const co2Comparator = (count, length) => count < length / 2;
const oxygenSupply = parseInt(getLifeSupportRating(dataD3, oxygenComparator), 2);
const co2Supply = parseInt(getLifeSupportRating(dataD3, co2Comparator), 2);
console.log(oxygenSupply*co2Supply);

function getLifeSupportRating(
  diagnosticReport: string[],
  comparator: (count: number, length: number) => boolean
) {
  let bit = 0;
  while (diagnosticReport.length > 1) {
    const oneCount = countOnesInBit(diagnosticReport, bit);
    if (comparator(oneCount, diagnosticReport.length)) {
      diagnosticReport = diagnosticReport.filter((it) => it[bit] === '1');
    } else {
      diagnosticReport = diagnosticReport.filter((it) => it[bit] === '0');
    }
    bit = bit + 1;
  }
  return diagnosticReport[0];
}

function countOnesInBit(diagnosticReport: string[], bit: number): number {
  let oneCounts = 0;
  diagnosticReport.forEach((it) => {
    if (it[bit] === '1') {
      oneCounts = oneCounts + 1;
    }
  });
  return oneCounts;
}
