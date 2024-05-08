export function ConversionReal(valueInCents: number) {
    const reais = valueInCents / 100;
    return (reais.toFixed(2));
}