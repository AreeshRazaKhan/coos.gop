import Link from 'next/link'

const FormLegalLine = () => (
  <p className="md:col-span-2 font-mono text-[11px] leading-[1.6] text-stone-500">
    By submitting you agree to the{' '}
    <Link
      href="/terms-and-conditions"
      className="underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-600"
    >
      Terms of Service
    </Link>{' '}
    and{' '}
    <Link
      href="/privacy-policy"
      className="underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-600"
    >
      Privacy Policy
    </Link>
    .
  </p>
)

export default FormLegalLine
