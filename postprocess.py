import os

'''
This file polished the ENCRYPTED secure.html. Do NOT manually call it except for debugging the polish effect.
When you publish the website and don't see the updated content, follow steps below one by one:
1. Clear cookies.
2. Clear the browse data for the past hour (obviously, more is okay).
3. Refresh the page.
If problem persists, post an Issue in the website-code private repo (this repo).
'''

def main():
    secure_html_path = os.path.join("dist", "secure.html")

    with open(secure_html_path, 'r') as file:
        content = file.read()

    content = content.replace("This page is password protected.", "Restrict to URFO Musicians and Staff Members Only.")
    content = content.replace("Protected Page", "URFO Internal Portal")
    content = content.replace("background:#000;", "background:#7e0000;")
    content = content.replace(".box{max-width:24rem;width:100%;background:var(--gray-800);padding:1rem;border-radius:.125rem;margin:0 auto;height:170px}", ".box{max-width:24rem;width:100%;background:var(--gray-800);padding:1rem;border-radius:.125rem;margin:0 auto;height:210px}")

    with open(secure_html_path, 'w') as file:
        file.write(content)

    print(f"Successfully processed {secure_html_path}")

if __name__ == "__main__":
    main()