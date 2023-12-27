import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack spacing={1}>
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText width="100px" noOfLines={2} skeletonHeight={2} />
    </HStack>
  );
};

export default GenreSkeleton;
