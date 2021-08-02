import { Flex, PulseLoader } from "shared";

export default function LoadingAuthComponent() {
  return (
    <Flex justifyContent="center" alignItems="center" width="100%">
      <PulseLoader />
    </Flex>
  );
}
