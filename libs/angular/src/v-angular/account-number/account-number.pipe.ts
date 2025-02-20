import { Pipe, PipeTransform } from '@angular/core'

export const enum SchemaType {
  IBAN = 'iban',
  BBAN = 'bban',
}

export type AccountNumberSchema = 'iban' | 'bban'

const evaluateValueSchema = (value: string): AccountNumberSchema => {
  const countryCodePattern = /^[a-zA-Z]{2}/
  const hasCountryCode = countryCodePattern.test(value)
  return hasCountryCode ? SchemaType.IBAN : SchemaType.BBAN
}

export const bbanPattern = /(\d{4})(\d{2})(\d{3})/
export const ibanPattern = /[a-zA-Z0-9]{1,4}/g

/**
 * Formats account number according to bban or iban standard, and adds non-breakable whitespace (\u00A0) between number groups.
 *
 * Example:
 * BBAN format: 'XXXX XX XXX <XXXX>'
 * IBAN format: 'SEXX XXXX XXXX XXXX <XXXX>'
 *
 * @param value - account number value to format.
 * @param schema - accepts either 'iban' or 'bban'. If undefined, schema will be evaluated to 'iban' if value starts with 2 letters.
 * @returns - formatted value, or original value if schema could not be determined
 */
export const formatAccountNumber = (
  value: string,
  schema?: AccountNumberSchema,
): string => {
  // evalue value schema to 'iban' or 'bban'
  if (!schema) schema = evaluateValueSchema(value)

  // if schema 'iban', return formatted value
  if (schema === SchemaType.BBAN)
    return value.replace(bbanPattern, '$1\u00A0$2\u00A0$3\u00A0')

  // if schema 'iban', remove all white-spaces and other separators from the value
  const trimmedValue = value.replace(/\s|-/g, '')
  if (schema === SchemaType.IBAN)
    return trimmedValue.replace(ibanPattern, (match: string, offset: number) =>
      offset ? `\u00A0${match}` : match,
    )

  // return untouched value if unable to determine schema
  return value
}

/**
 * Pipe for formatting account number according to bban or iban standard, and adds non-breakable whitespace (\u00A0) between number groups.
 *
 * BBAN format: 'XXXX XX XXX <XXXX>'
 * IBAN format: 'SEXX XXXX XXXX XXXX <XXXX>'
 */
@Pipe({
  name: 'accountNumber',
  standalone: true,
})
export class AccountNumberPipe implements PipeTransform {
  transform = (value: string, schema?: AccountNumberSchema): string =>
    formatAccountNumber(value, schema)
}
