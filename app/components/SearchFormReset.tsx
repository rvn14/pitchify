"use client"

import Link from "next/link"

const SearchFormReset = () => {
    const formRef = document.querySelector('.search-form') as HTMLFormElement
    const reset = () => {
        if (formRef) {
            formRef.reset()
        }
        
    }
  return (
    <button type="reset" onClick={reset} className="btn btn-primary">
        <Link href="/" className="search-btn text-white">
            X
        </Link>
    </button>
  )
}

export default SearchFormReset