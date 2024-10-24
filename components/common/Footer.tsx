import { Container } from "@/universal";

export const Footer = () => {
  return (
    <Container>
      <div className="mt-24 pb-3 flex justify-between">
        <div>
          <h3 className="text-lg text-primary font-bold mb-2">Quit Zina!</h3>
          <ul>
            <li>Level-4, 34, Awal Centre, Banani, Dhaka</li>
            <li>Official: support@quitzina.com</li>
            <li>Helpline : 01580530145 (Available : 10AM - 10PM)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Useful Links</h3>
          <ul>
            <li>Refund policy</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>App Privacy Policy</li>
            <li>About us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <ul className="flex items-center justify-between gap-2">
            <li>TW/X</li>
            <li>IN</li>
            <li>YT</li>
            <li>FB</li>
          </ul>
          <div className="mt-3">
            <h4 className="text-lg font-medium">Download App</h4>
            <p>Google Play</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center py-5 -mb-12">
        <p>Copyright &copy; {new Date().getFullYear()} Quit Zina</p>
      </div>
    </Container>
  );
};
