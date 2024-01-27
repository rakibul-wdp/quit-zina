import { Container } from "@/universal";

export const Navbar = () => {
  return (
    <Container>
      <div className="py-5 flex items-center justify-between">
        <h1 className="text-lg text-primary font-bold">Quit Zina!</h1>
        <ul className="flex items-center justify-center gap-5 font-medium">
          <li>Home</li>
          <li>Countdown</li>
          <li>Motivation</li>
          <li>Dashboard</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </Container>
  );
};
