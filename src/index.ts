import Server from './Server';

(async function main() {
  try {
    Server.application.listen(3000, () => {
      console.info(`Server is running on http://localhost:3000`);
    });
  } catch(e: any) {
    console.error(e.stack);
  }
})();