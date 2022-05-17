import { BaseAuthLayout } from "../../../../../components/auth/base";
import { LoginForm } from "../../../components/auth/login";
import Link from "next/link";

const styles = {
  marginTop: 30,
  textAlign: "center",
};
export default function Login() {
  return (
    <BaseAuthLayout>
      <LoginForm />

      <div style={styles}>
        <Link href="/auth/register">Signup now!</Link>
      </div>
    </BaseAuthLayout>
  );
}
