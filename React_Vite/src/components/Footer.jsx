export default function Footer() {
  return (
    <footer className="w-full bg-gray-600 text-cyan-100 py-5">
      <div className="">

        <p className="text-sm font-serif text-center">
          I am vengeance. I am the night. I am Batman. <br /> My name is Bruce
          Wayne, and my life changed forever on a cold night in Gotham when I
          witnessed my parents murdered in an alleyway. From that trauma, I
          forged an oath to war on all criminals, training my body and mind to
          absolute perfection. I have no superpowers; I rely on my intellect, my
          training in every known martial art, and an arsenal of high-tech gear
          funded by my family’s fortune. By day, I play the part of a
          billionaire philanthropist to keep the world from suspecting the
          truth: that every night, I don the cowl to protect my city from the
          shadows
        </p>

        <div className="border-t border-gray-800 mt-8 pt-4 text-sm flex flex-col justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Gotham City. All rights reserved.</p>
          <p className="text-gray-500">“I am the night. I am Batman.”</p>
        </div>

      </div>
    </footer>
  );
}
