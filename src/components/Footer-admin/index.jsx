import { Link } from "react-router-dom";
export default function FooterAdmin() {
  return (
    <footer class="main-footer">
      <strong>
        Copyright &copy; 2014-2021 <Link to="/admin">AdminLTE.io</Link>.
      </strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.1.0
      </div>
    </footer>
  );
}
