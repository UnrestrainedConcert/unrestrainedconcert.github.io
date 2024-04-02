import os

def main():
    secure_html_path = os.path.join("dist", "secure.html")

    with open(secure_html_path, 'r') as file:
        content = file.read()

    content = content.replace("This page is password protected.", "Restrict to URFO Musicians and Staff Members Only.")
    content = content.replace("Protected Page", "URFO Internal Portal")
    content = content.replace("background:#000;", "background:#7e0000;")
    content = content.replace(".box{max-width:24rem;width:100%;background:var(--gray-800);padding:1rem;border-radius:.125rem;margin:0 auto;height:170px}", ".box{max-width:24rem;width:100%;background:var(--gray-800);padding:1rem;border-radius:.125rem;margin:0 auto;height:220px}")

    with open(secure_html_path, 'w') as file:
        file.write(content)

    print(f"Successfully processed {secure_html_path}")

if __name__ == "__main__":
    main()