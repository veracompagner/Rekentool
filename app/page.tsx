import Form from "@/components/form/Form";
import { Container } from "@/app/styles/page.styled";
import { LeaseCalculatorProvider } from "@/components/form/LeaseCalculatorContext";
import SavedCalculationsList from "@/components/saved-calculations-list/SavedCalculationsList";

const Home = () => {
  return (
    <LeaseCalculatorProvider>
      <Container>
        <Form />
        <SavedCalculationsList />
      </Container>
    </LeaseCalculatorProvider>
  );
};

export default Home;
