export function isValidEcuadorianID(id: string): boolean {
  // Basic format checks
  if (!/^\d+$/.test(id)) return false;
  if (id.length !== 10 && id.length !== 13) return false;

  const province = parseInt(id.substring(0, 2), 10);
  const thirdDigit = parseInt(id.substring(2, 3), 10);

  // Check province (01-24)
  if (province < 1 || province > 24) return false;

  // 1. Cédula (10 digits) or RUC Natural Person (13 digits)
  // Third digit must be < 6
  if (thirdDigit < 6) {
    return validateModulo10(id);
  }

  // 2. RUC Public Society (13 digits)
  // Third digit must be 6
  if (thirdDigit === 6) {
    return validateRucPublic(id);
  }

  // 3. RUC Private Society (13 digits)
  // Third digit must be 9
  if (thirdDigit === 9) {
    return validateRucPrivate(id);
  }

  return false;
}

function validateModulo10(id: string): boolean {
  // For Cédula, length must be 10. For RUC Natural, length must be 13.
  // But the validation algorithm uses the first 9 digits + 10th digit verifier.
  
  // If it's RUC (13 digits), last 3 digits must be != 000 (usually 001)
  if (id.length === 13) {
    if (id.substring(10, 13) === "000") return false;
  } else if (id.length !== 10) {
    return false; // Should be 10 if not 13
  }

  const digits = id.split("").map(Number);
  const coefficients = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    let result = digits[i] * coefficients[i];
    if (result >= 10) {
      result -= 9;
    }
    sum += result;
  }

  const remainder = sum % 10;
  const verifier = remainder === 0 ? 0 : 10 - remainder;

  return verifier === digits[9];
}

function validateRucPublic(id: string): boolean {
  // RUC Public Society: 13 digits
  // Third digit is 6
  // Verifier is 9th digit
  // Last 4 digits != 0000
  if (id.length !== 13) return false;
  if (id.substring(9, 13) === "0000") return false;

  const digits = id.split("").map(Number);
  const coefficients = [3, 2, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    sum += digits[i] * coefficients[i];
  }

  const remainder = sum % 11;
  const verifier = remainder === 0 ? 0 : 11 - remainder;

  return verifier === digits[8];
}

function validateRucPrivate(id: string): boolean {
  // RUC Private Society: 13 digits
  // Third digit is 9
  // Verifier is 10th digit
  // Last 3 digits != 000
  if (id.length !== 13) return false;
  if (id.substring(10, 13) === "000") return false;

  const digits = id.split("").map(Number);
  const coefficients = [4, 3, 2, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += digits[i] * coefficients[i];
  }

  const remainder = sum % 11;
  const verifier = remainder === 0 ? 0 : 11 - remainder;

  return verifier === digits[9];
}
