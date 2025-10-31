from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('file://' + __import__('os').getcwd() + '/index.html')
        page.wait_for_selector('.loader-wrapper', state='hidden')
        page.screenshot(path='jules-scratch/verification/verification.png')
        browser.close()

run()
