// Smart Gym Camera + Machine Dashboard (Java Swing)

import javax.swing.*;
import java.awt.*;

public class GymDashboard {

    JFrame frame;
    JPanel content;

    public GymDashboard() {
        frame = new JFrame("GYM AI Dashboard");
        frame.setSize(1100, 650);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());
        frame.getContentPane().setBackground(Color.black);

        // Sidebar
        JPanel sidebar = new JPanel();
        sidebar.setPreferredSize(new Dimension(220, 650));
        sidebar.setBackground(new Color(26, 26, 26));
        sidebar.setLayout(new GridLayout(6, 1, 10, 10));

        JLabel title = new JLabel("GYM AI", SwingConstants.CENTER);
        title.setForeground(Color.GREEN);
        title.setFont(new Font("Arial", Font.BOLD, 24));
        sidebar.add(title);

        JButton camBtn = new JButton("Live Camera");
        JButton machineBtn = new JButton("Machines");
        JButton exitBtn = new JButton("Exit");

        sidebar.add(camBtn);
        sidebar.add(machineBtn);
        sidebar.add(exitBtn);

        frame.add(sidebar, BorderLayout.WEST);

        // Topbar
        JLabel topbar = new JLabel("Smart Gym Monitoring System", SwingConstants.CENTER);
        topbar.setForeground(Color.white);
        topbar.setBackground(new Color(17,17,17));
        topbar.setOpaque(true);
        topbar.setFont(new Font("Arial", Font.BOLD, 26));
        topbar.setPreferredSize(new Dimension(0, 60));
        frame.add(topbar, BorderLayout.NORTH);

        // Content
        content = new JPanel();
        content.setBackground(Color.black);
        frame.add(content, BorderLayout.CENTER);

        camBtn.addActionListener(e -> showCamera());
        machineBtn.addActionListener(e -> showMachines());
        exitBtn.addActionListener(e -> System.exit(0));

        showCamera();

        frame.setVisible(true);
    }

    void showCamera() {
        content.removeAll();
        content.setLayout(new BorderLayout());

        JLabel cam = new JLabel("📷 Camera Feed", SwingConstants.CENTER);
        cam.setForeground(Color.gray);
        cam.setBackground(Color.black);
        cam.setOpaque(true);
        cam.setFont(new Font("Arial", Font.BOLD, 28));

        content.add(cam, BorderLayout.CENTER);

        content.revalidate();
        content.repaint();
    }

    void showMachines() {
        content.removeAll();
        content.setLayout(new GridLayout(4,1,10,10));

        String[] data = {
            "🏃 Treadmill : Active",
            "🏋 Bench Press : Available",
            "🚴 Bike : In Use",
            "🔥 Calories Burned Today : 1240"
        };

        for(String item : data){
            JLabel lbl = new JLabel(item);
            lbl.setForeground(Color.white);
            lbl.setBackground(new Color(34,34,34));
            lbl.setOpaque(true);
            lbl.setFont(new Font("Arial", Font.PLAIN, 20));
            content.add(lbl);
        }

        content.revalidate();
        content.repaint();
    }

    public static void main(String[] args) {
        new GymDashboard();
    }
}
