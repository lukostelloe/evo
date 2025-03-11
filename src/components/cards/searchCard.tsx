import { Input } from '@/components/ui/input';
import { YStack } from '../ui/stacks';
import { useState } from 'react';

const list: string[] = ['shoes', 'hat', 'shoe', 'hats'];

function SearchCard() {
  const [searchedItem, setSearchedItem] = useState<string>('');

  return (
    <div>
      <Input
        name='search'
        placeholder='search'
        onChange={(e) => {
          setSearchedItem(e.target.value); // Update state
          console.log(e.target.value); // Log value
        }}
        value={searchedItem}
      />
      <YStack>
        {list
          .filter((item) => item.includes(searchedItem))
          .map((item, index) => (
            <p key={index}>{item}</p>
          ))}
      </YStack>
    </div>
  );
}
export default SearchCard;
