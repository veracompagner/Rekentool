import { Container } from "@/app/styles/page.styled";
import Form from "@/Applications/form/Form";
import { LeaseCalculatorProvider } from "@/Applications/form/LeaseCalculatorContext";
import SavedCalculationsList from "@/Applications/saved-calculations-list/SavedCalculationsList";

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
