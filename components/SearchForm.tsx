import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";



const SearchForm = ({query}: {query?: string}) => {

  
    
  return (
    <Form  action="/" scroll={false} className="search-form">
        <input type="text" name="query" placeholder="Search startups" defaultValue={query} className="search-input"/>
        <div className="flex gap-2">
            {query && <SearchFormReset />}
                <Button type="submit" className="search-btn cursor-pointer text-white"> <Search className="size-5"/> </Button>
        </div>
    </Form>
  )
}

export default SearchForm