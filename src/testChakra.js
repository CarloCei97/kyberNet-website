import * as Chakra from '@chakra-ui/react';

const keys = Object.keys(Chakra);
console.log("Exported keys count:", keys.length);
console.log("Keys containing 'form':", keys.filter(k => k.toLowerCase().includes('form')));
console.log("Does 'FormControl' exist?", keys.includes("FormControl"));
console.log("Does 'FormLabel' exist?", keys.includes("FormLabel"));
console.log("Does 'FormErrorMessage' exist?", keys.includes("FormErrorMessage"));
